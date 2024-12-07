export const COUPON_CODES = {
    BFRIDAY: "BFRIDAY",
    XMAS2024: "XMAS2024",
    NY2025: "NY2025",
    EASTER2025: "EASTER2025",
    SUMMER2025: "SUMMER2025",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;