import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export const makeHashedPassword = async (password: string): Promise<string> => {
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
};

export async function comparePasswords(
  enteredPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(enteredPassword, hashedPassword);
}
