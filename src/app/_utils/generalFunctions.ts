import CryptoJS from 'crypto-js';

export const getUserId = (encryptedUserId: string): string | null => {
  if (!encryptedUserId) {
    return null;
  }

  try {
    // Decrypt the userId
    const bytes = CryptoJS.AES.decrypt(encryptedUserId, process.env.NEXT_PUBLIC_SECRET_KEY as string);
    const decryptedUserId = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedUserId;
  } catch (error) {
    console.error('Failed to decrypt userId:', error);
    return null;
  }
};
