import Cryptr from 'cryptr';

const cryptr = new Cryptr(process.env.KEY_MESSAGE_ENCRYPT);

const Crypt = {
  encrypt(text: string): string {
    return cryptr.encrypt(text);
  },
  decrypt(text: string): string {
    return cryptr.decrypt(text);
  },
};

export { Crypt };
