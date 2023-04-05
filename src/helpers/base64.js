import base64 from 'base-64';
import utf8 from 'utf8';

export function encode(string) {
  return base64.encode(utf8.encode(string));
}

export function decode(string) {
  return base64.decode(utf8.decode(string));
}
