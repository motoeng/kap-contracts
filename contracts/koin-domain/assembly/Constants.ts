export const MILLISECONDS_PER_DAY: u64 = 86_400_000;
export const MILLISECONDS_PER_YEAR: u64 = MILLISECONDS_PER_DAY * 365;
export const MILLISECONDS_IN_10_YEARS: u64 = MILLISECONDS_PER_YEAR * 10;

// grace perdio is 60 days
export const GRACE_PERIOD_IN_MS: u64 = MILLISECONDS_PER_DAY * 60;

export const GET_LATEST_PRICE_ENTRYPOINT = 0x8d26b6d6;
export const BALANCE_OF_ENTRYPOINT = 0x5c721497;