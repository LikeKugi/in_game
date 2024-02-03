export const randomPasswordGenerator = () => {
  const chars = "2345679abcdefghijkmnpqrstuvwxyzACDEFGHJKLMNPQRSTUVWXYZ";
  const passwordLength = 6;
  const password = [];
  for (let i = 0; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password.push(chars[randomNumber]);
  }
  return password.join('');
}
