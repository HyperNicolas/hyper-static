import { validate as isEmail } from 'email-validator';

const isNullOrEmpty = value => value == null || value === '';

export const required = value => {
  return isNullOrEmpty(value) ? 'Verplicht' : undefined;
};

export function email(value) {
  if (!isNullOrEmpty(value) && !isEmail(value || '')) {
    return 'Ongeldige email';
  }
  return undefined;
}
