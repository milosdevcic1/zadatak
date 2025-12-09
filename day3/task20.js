let meseci = [
    {mesec: 'januar', brojDana: 31},
    {mesec: 'februar', brojDana: 28},
    {mesec: 'mart', brojDana: 31},
    {mesec: 'april', brojDana: 30},
    {mesec: 'maj', brojDana: 31},
    {mesec: 'jun', brojDana: 30},
    {mesec: 'jul', brojDana: 31},
    {mesec: 'avgust', brojDana: 31},
    {mesec: 'suptembar', brojDana: 30},
    {mesec: 'oktobar', brojDana: 31},
    {mesec: 'novembar', brojDana: 30},
    {mesec: 'decembar', brojDana: 31}
]

for (let obj of meseci) {
    for (let dan = 1; dan <= obj.brojDana; dan++) {
        console.log(`${dan}. ${obj.mesec}`);
    }
}