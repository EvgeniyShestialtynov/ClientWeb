"use strict";

(function () {
    function getMaxCityCountCountry(array) {
        if (array.length === 0) {
            return "В списке нет стран";
        }

        const maxCityCountCountry = [array[0].countryName];

        if (array.length === 1) {
            return maxCityCountCountry;
        }

        let temp = array[0].cities.length;

        for (let i = 1; i < array.length; i++) {
            if (array[i].cities.length < temp) {
                continue;
            }

            if (array[i].cities.length > temp) {
                temp = array[i].cities.length;
                maxCityCountCountry.splice(0, maxCityCountCountry.length);
            }

            maxCityCountCountry.push(array[i].countryName);
        }

        return maxCityCountCountry;
    }

    function getCountriesAggregate(array) {
        return array.reduce((accumulator, country) => {
            const totalPopulation = country.cities.reduce(
                (sum, city) => sum + city.population, 0
            );

            accumulator[country.countryName] = totalPopulation;

            return accumulator;
        }, {});
    }

    const countries = [
        {
            countryName: "russia",
            cities: [
                { cityName: "Moscow", population: 13274285 },
                { cityName: "Saint-Petersburg", population: 5652922 },
                { cityName: "Krasnodar", population: 1154885 },
                { cityName: "ekaterinburg", population: 1548187 },
            ],
        },
        {
            countryName: "usa",
            cities: [
                { cityName: "washington d.c.", population: 689545 },
                { cityName: "new york city", population: 8478072 },
                { cityName: "los angeles", population: 3849297 },
                { cityName: "houston", population: 2314157 },
                { cityName: "miami", population: 435919 },
            ],
        },
        {
            countryName: "australia",
            cities: [
                { cityName: "sydney", population: 5367206 },
                { cityName: "melbourne", population: 5159211 },
                { cityName: "brisbane", population: 2628083 },
            ],
        },
    ];

    console.log("Создан массив объектов-стран: ", countries);
    console.log("Страны с максимальным количеством городов: ", getMaxCityCountCountry(countries));
    console.log("Население стран: ", getCountriesAggregate(countries));
})();