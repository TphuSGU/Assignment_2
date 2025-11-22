import {
  validateUsername,
  validatePassword,
  validateRequired,
  validateEmail,
  validateMinLength,
} from "../utils/validation";

describe("Login Validation Tests", () => {
  // ================= validateUsername() =================
  test("TC1: Username rong - nen tra ve loi", () => {
    expect(validateUsername("")).toBe("Ten dang nhap khong duoc de trong");
    expect(validateUsername("   ")).toBe("Ten dang nhap khong duoc de trong");
  });

  test("TC2: Username qua ngan - nen tra ve loi", () => {
    expect(validateUsername("ab")).toBe(
      "Ten dang nhap phai co it nhat 3 ky tu"
    );
  });

  test("TC3: Username qua dai - nen tra ve loi", () => {
    const longUsername = "a".repeat(21);
    expect(validateUsername(longUsername)).toBe(
      "Ten dang nhap khong duoc qua 20 ky tu"
    );
  });

  test("TC4: Username chua ky tu dac biet khong hop le", () => {
    expect(validateUsername("user!")).toBe(
      "Ten dang nhap chi duoc chua chu cai, so va dau gach duoi"
    );
    expect(validateUsername("user@123")).toBe(
      "Ten dang nhap chi duoc chua chu cai, so va dau gach duoi"
    );
    expect(validateUsername("user 123")).toBe(
      "Ten dang nhap chi duoc chua chu cai, so va dau gach duoi"
    );
  });

  test("TC5: Username hop le - khong co loi", () => {
    expect(validateUsername("user123")).toBe("");
    expect(validateUsername("User_01")).toBe("");
  });

  // ================= validatePassword() =================
  test("TC6: Password rong - nen tra ve loi", () => {
    expect(validatePassword("")).toBe("Mat khau khong duoc de trong");
    expect(validatePassword("   ")).toBe("Mat khau khong duoc de trong");
  });

  test("TC7: Password qua ngan - nen tra ve loi", () => {
    expect(validatePassword("Ab1")).toBe(
      "Mat khau phai co it nhat 6 ky tu"
    );
  });

  test("TC8: Password qua dai - nen tra ve loi", () => {
    const longPassword = "A1" + "b".repeat(29);
    expect(validatePassword(longPassword)).toBe(
      "Mat khau khong duoc qua 30 ky tu"
    );
  });

  test("TC9: Password khong co chu hoac khong co so - nen tra ve loi", () => {
    expect(validatePassword("abcdef")).toBe("Mat khau phai chua ca chu va so");
    expect(validatePassword("1234567")).toBe("Mat khau phai chua ca chu va so");
  });

  test("TC10: Password hop le - khong co loi", () => {
    expect(validatePassword("Test123")).toBe("");
    expect(validatePassword("a1b2c3d4")).toBe("");
  });
});

// ================= Các hàm validation khác =================
describe("Other Validation Tests", () => {
  test("validateRequired() - trường rỗng và có giá trị", () => {
    expect(validateRequired("")).toBe("Trường này không được để trống");
    expect(validateRequired("   ")).toBe("Trường này không được để trống");
    expect(validateRequired("abc")).toBeNull();
  });

  test("validateEmail() - email hợp lệ và không hợp lệ", () => {
    expect(validateEmail("abc")).toBe("Email không hợp lệ");
    expect(validateEmail("abc@example.com")).toBeNull();
  });

  test("validateMinLength() - dưới và trên minLength", () => {
    expect(validateMinLength("abc", 5)).toBe("Phải có ít nhất 5 ký tự");
    expect(validateMinLength("abcdef", 5)).toBeNull();
  });
});
