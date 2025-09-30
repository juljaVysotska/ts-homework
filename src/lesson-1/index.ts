import { getParsedBirthday } from '../utils';
import { User } from './types';

const fullName: string = 'John Doe';
const birthday: string | Date = new Date();
const telNumber: number | string = '+12345636784';
const hobbies: string[] | null = ['horse riding', 'reading', 'listening music'];

const displayUserInfo = ({ fullName, birthday, telNumber, hobbies }: User) => {
    return `
    Name: ${fullName};
    Birthday: ${birthday instanceof Date ? getParsedBirthday(birthday) : birthday};
    Contact number: ${telNumber};
    Hobbies: ${hobbies ? hobbies.join(', ') : 'no info'};
    `;
};

console.log(displayUserInfo({
    fullName,
    birthday,
    telNumber,
    hobbies
}));