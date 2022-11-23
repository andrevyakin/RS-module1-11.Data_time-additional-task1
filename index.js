const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '32.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
];

const formatDate = date => {
    return date
        .slice()
        .split('.')
        .reverse()
        .join('-');
}

const allowVisa = arrayOfClients => {
    const people = arrayOfClients.filter(client => Date.parse(formatDate(client.passportExpiration))
        ? true
        : console.log(`У клиента ${client.firstName} указана некорректная дата истечения срока действия паспорта ${client.passportExpiration}.\nКлиент исключен из проверки до исправления даты.`));

    return people
        .filter(client => !client.criminalRecord
            && Date.now() < Date.parse(formatDate(client.passportExpiration)))
}

const result = allowVisa(peopleWithVisa);
console.log('result', result);