import { renderHook, act } from "@testing-library/react";
import useFetch from "./useFetch";

describe("TEST-1: check if test file configured correctly.", () => {
   it("true is truthy", () => {
      expect(true).toBe(true);
   });

   it("false is falsy", () => {
      expect(false).toBe(false);
   });
});

describe("TEST-2: Testing custom hook: useFetch", () => {
   it("fetches data successfully", async () => {
      const mockData = { someKey: "someValue" };
      const mockUrl = "https://example.com/api/data";
      global.fetch = jest.fn(() =>
         Promise.resolve({
            json: () => Promise.resolve(mockData),
            ok: true,
         })
      );

      const { result } = renderHook(() => useFetch(mockUrl));

      // Initial state
      expect(result.current.loading).toBe(true);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe(null);

      await act(async () => {
         await new Promise((resolve) => setTimeout(resolve, 0)); // Allow component to update
      });

      // Updated state after successful fetch
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockData);
      expect(result.current.error).toBe(null);
   });

   it("handles fetch error", async () => {
      const mockUrl = "https://example.com/api/data";
      global.fetch = jest.fn(() =>
         Promise.resolve({
            ok: false,
            status: 500,
            statusText: "Internal Server Error",
         })
      );

      const { result } = renderHook(() => useFetch(mockUrl));

      // Initial state
      expect(result.current.loading).toBe(true);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe(null);

      await act(async () => {
         await new Promise((resolve) => setTimeout(resolve, 0)); // Allow component to update
      });

      // Updated state after fetch error
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toBe(null);
      expect(result.current.error).toBe("Network response was not ok!");
   });
});
