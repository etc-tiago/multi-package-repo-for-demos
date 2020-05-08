import { isSafePassword, isMediumPassword, isStrongPassword } from './password';

describe('Safe Password Validator', () => {
  it('Should invalidate password', () => {
    expect(isSafePassword('valid')).toBe(false);
    expect(isSafePassword('P3x')).toBe(false);
    expect(isSafePassword('P3x.2')).toBe(false);
    expect(isSafePassword('91820938901')).toBe(false);
  });
  it('Should validate password', () => {
    expect(isSafePassword('MihUkYbjKjhGb')).toBe(true);
    expect(isSafePassword('P3x.2?2')).toBe(true);
    expect(isSafePassword('SDP3x8RVOp-5923ad')).toBe(true);
    expect(isSafePassword('SDP3x8RVOp-52345ad.')).toBe(true);
    expect(isSafePassword('SDP3xp-52345_ad')).toBe(true);
    expect(isSafePassword('SDP3xp-52345_ad')).toBe(true);
    expect(isSafePassword('P3x.2?2%&')).toBe(true);
  });
  it('Should validate password with safe level', () => {
    expect(isSafePassword('MihUkYb2jKjhGb')).toBe(true); // soft
    expect(isMediumPassword('P3x.2?2')).toBe(true); // medium
    expect(isStrongPassword('SDP3x8%RVOp-5923ad')).toBe(true); // strong
  });
});
