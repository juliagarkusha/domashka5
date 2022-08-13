const members = [
    {
        index: 0,
        isActive: true,
        name: "John Doe",
        balance: "$2,226.60",
        phone: "+1 (840) 583-3207",
    },
    {
        index: 1,
        isActive: true,
        name: "Merry Hope",
        balance: "$2,778.05",
        phone: "+1 (856) 599-3450",
    },
    {
        index: 2,
        isActive: true,
        name: "Eugene Stakidis",
        balance: "$730.10",
        phone: "+1 (840) 333-5400",
    },
    {
        index: 2,
        isActive: true,
        name: "Stan Smith",
        balance: "$5,001.50",
        phone: "+1 (839) 121-3044",
    },
    {
        index: 3,
        isActive: true,
        name: "Johnatan Tape",
        balance: "$3,020.60",
        phone: "+1 (839) 003-5579",
    },
    {
        index: 4,
        isActive: true,
        name: "Aaron Big",
        balance: "$1,999.99",
        phone: "+1 (840) 033-6873",
    },
    {
        index: 5,
        isActive: true,
        name: "Artur Cheese",
        balance: "$2,545.00",
        phone: "+1 (840) 562-3790",
    },
];

const membersPhoneArray = [];
let balanceSum = 0;

const balanceFormatToNumberHandler = (value) => {
    const clearedValue = value.substr(1).replaceAll(',', '');
    return Number((clearedValue * 100).toFixed(0));
}

const balanceFormatToStringHandler = (value) => {
    const convertedValue = Number(value).toFixed(2) / 100;
    return `$${convertedValue.toLocaleString('en-IN')}`;
}

members.map(member => {
    balanceFormatToNumberHandler(member.balance) / 100 > 2000 ? membersPhoneArray.push(member.phone) : '';
    balanceSum += balanceFormatToNumberHandler(member.balance);
})

console.log('Массив телефонных номеров пользователей у которых баланс больше 2000 долларов:', membersPhoneArray);
console.log('Сумма балансов всех пользователей:', balanceFormatToStringHandler(balanceSum));
