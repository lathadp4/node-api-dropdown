// seedData.js
const { models } = require('./model/index');

// Example data to insert
const seedData = async () => {
    const usa = new models.Country({
        name: 'USA',
        code: 1,
        states: [
            {
                name: 'California',
                districts: [
                    { name: 'Los Angeles', population: 39500000, areaSize: 423967, file_path: "/uploads" },
                    { name: 'San Francisco', population: 870000, areaSize: 121, file_path: "/uploads" },
                ],
            },
            {
                name: 'Texas',
                districts: [
                    { name: 'Houston', population: 2300000, areaSize: 1625, file_path: "/uploads" },
                    { name: 'Austin', population: 950000, areaSize: 437, file_path: "/uploads" },
                ],
            },
        ],
    });

    const canada = new models.Country({
        name: 'Canada',
        code: 1,
        states: [
            {
                name: 'Ontario',
                districts: [
                    { name: 'Toronto', population: 2800000, areaSize: 630, file_path: "/uploads" },
                    { name: 'Ottawa', population: 1000000, areaSize: 2778, file_path: "/uploads" },
                ],
            },
            {
                name: 'British Columbia',
                districts: [
                    { name: 'Vancouver', population: 630000, areaSize: 114, file_path: "/uploads" },
                    { name: 'Victoria', population: 85000, areaSize: 19.5, file_path: "/uploads" },
                ],
            },
        ],
    });

    const india = new models.Country({
        name: 'India',
        code: 91,
        states: [
            {
                name: 'Maharashtra',
                districts: [
                    { name: 'Mumbai', population: 12442373, areaSize: 603, file_path: "/uploads" },
                    { name: 'Pune', population: 3190000, areaSize: 729, file_path: "/uploads" },
                ],
            },
            {
                name: 'Delhi',
                districts: [
                    { name: 'New Delhi', population: 2500000, areaSize: 42.7, file_path: "/uploads" },
                    { name: 'South Delhi', population: 3000000, areaSize: 250, file_path: "/uploads" },
                ],
            },
            {
                name: 'Karnataka',
                districts: [
                    { name: 'Bangaluru', population: 2500000, areaSize: 42.7, file_path: "/uploads" },
                    { name: 'Shivamogga', population: 3000000, areaSize: 250, file_path: "/Shivamogga.pdf" },
                ],
            },
        ],
    });

    const australia = new models.Country({
        name: 'Australia',
        code: 61,
        states: [
            {
                name: 'New South Wales',
                districts: [
                    { name: 'Sydney', population: 5230000, areaSize: 12367, file_path: "/uploads" },
                    { name: 'Newcastle', population: 322000, areaSize: 400, file_path: "/uploads" },
                ],
            },
            {
                name: 'Queensland',
                districts: [
                    { name: 'Brisbane', population: 2500000, areaSize: 594, file_path: "/uploads" },
                    { name: 'Cairns', population: 150000, areaSize: 158, file_path: "/uploads" },
                ],
            },
        ],
    });

    const germany = new models.Country({
        name: 'Germany',
        code: 49,
        states: [
            {
                name: 'Bavaria',
                districts: [
                    { name: 'Munich', population: 1450000, areaSize: 310, file_path: "/uploads" },
                    { name: 'Nuremberg', population: 510000, areaSize: 186, file_path: "/uploads" },
                ],
            },
            {
                name: 'Berlin',
                districts: [
                    { name: 'Berlin', population: 3600000, areaSize: 891, file_path: "/uploads" },
                ],
            },
        ],
    });

    const france = new models.Country({
        name: 'France',
        code: 33,
        states: [
            {
                name: 'Île-de-France',
                districts: [
                    { name: 'Paris', population: 2200000, areaSize: 105, file_path: "/uploads" },
                ],
            },
            {
                name: 'Provence-Alpes-Côte d\'Azur',
                districts: [
                    { name: 'Marseille', population: 850000, areaSize: 240, file_path: "/uploads" },
                    { name: 'Nice', population: 340000, areaSize: 71.92, file_path: "/uploads" },
                ],
            },
        ],
    });

    const japan = new models.Country({
        name: 'Japan',
        code: 81,
        states: [
            {
                name: 'Tokyo',
                districts: [
                    { name: 'Shibuya', population: 2400000, areaSize: 15.11, file_path: "/uploads" },
                    { name: 'Shinjuku', population: 3500000, areaSize: 18.23, file_path: "/uploads" },
                ],
            },
            {
                name: 'Osaka',
                districts: [
                    { name: 'Osaka', population: 2700000, areaSize: 223, file_path: "/uploads" },
                ],
            },
        ],
    });

    const brazil = new models.Country({
        name: 'Brazil',
        code: 55,
        states: [
            {
                name: 'São Paulo',
                districts: [
                    { name: 'São Paulo City', population: 12000000, areaSize: 1521, file_path: "/uploads" },
                    { name: 'Campinas', population: 1200000, areaSize: 247, file_path: "/uploads" },
                ],
            },
            {
                name: 'Rio de Janeiro',
                districts: [
                    { name: 'Rio de Janeiro', population: 6700000, areaSize: 1255, file_path: "/uploads" },
                ],
            },
        ],
    });

    const mexico = new models.Country({
        name: 'Mexico',
        code: 52,
        states: [
            {
                name: 'CDMX',
                districts: [
                    { name: 'Mexico City', population: 9000000, areaSize: 1485, file_path: "/uploads" },
                ],
            },
            {
                name: 'Jalisco',
                districts: [
                    { name: 'Guadalajara', population: 5000000, areaSize: 151, file_path: "/uploads" },
                ],
            },
        ],
    });

    const uk = new models.Country({
        name: 'United Kingdom',
        code: 44,
        states: [
            {
                name: 'England',
                districts: [
                    { name: 'London', population: 8900000, areaSize: 1572, file_path: "/uploads" },
                    { name: 'Manchester', population: 550000, areaSize: 115, file_path: "/uploads" },
                ],
            },
            {
                name: 'Scotland',
                districts: [
                    { name: 'Edinburgh', population: 500000, areaSize: 264, file_path: "/uploads" },
                    { name: 'Glasgow', population: 610000, areaSize: 175, file_path: "/uploads" },
                ],
            },
        ],
    });

    const southAfrica = new models.Country({
        name: 'South Africa',
        code: 27,
        states: [
            {
                name: 'Gauteng',
                districts: [
                    { name: 'Johannesburg', population: 4400000, areaSize: 1645, file_path: "/uploads" },
                    { name: 'Pretoria', population: 2300000, areaSize: 179, file_path: "/uploads" },
                ],
            },
            {
                name: 'Western Cape',
                districts: [
                    { name: 'Cape Town', population: 4500000, areaSize: 2465, file_path: "/uploads" },
                ],
            },
        ],
    });


    await usa.save();
    await india.save();
    await canada.save();
    await australia.save();
    await germany.save();
    await france.save()
    await japan.save()
    await brazil.save()
    await mexico.save()
    await uk.save()
    await southAfrica.save()
    console.log('Data seeded!');
};

seedData().catch(console.error);
