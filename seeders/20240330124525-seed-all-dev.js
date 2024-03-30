"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const manufactures = [
      "BMW",
      "Lincoln",
      "Ford",
      "Honda",
      "Buick",
      "Chevy",
      "Dodge",
      "Audi",
      "Toyota",
      "Nissan",
    ];

    await Promise.all(
      manufactures.map(async (m) => {
        await queryInterface.bulkInsert("manufactures", [
          {
            name: m,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );

    const transmission = ["Automatic", "Automanual", "Manual", "CVT"];
    await Promise.all(
      transmission.map(async (m) => {
        await queryInterface.bulkInsert("transmissions", [
          {
            name: m,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );

    const types = [
      "Sedan",
      "Convertible",
      "Hatchback",
      "Minivan",
      "Regular Cab Pickup",
      "Extended Cab Pickup",
      "Coupe",
      "Passenger Van",
      "SUV",
      "Crew Cab Pickup",
      "Wagon",
    ];

    await Promise.all(
      types.map(async (m) => {
        await queryInterface.bulkInsert("types", [
          {
            name: m,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );

    const options = [
      "Cruise Control",
      "Tinted Glass",
      "AM/FM Stereo",
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation",
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "A/C: Rear",
      "Alarm",
      "Alloy Wheels",
      "Power Locks",
      "MP3 (Multi Disc)",
      "Leather Interior",
      "Fog Lights",
      "Memory Seats",
      "Rear Window Defroster",
      "Integrated Phone",
      "Cassette Player",
      "Third Row Seats",
      "Rear Window Wiper",
      "Moonroof/Sunroof",
      "Power Steering",
      "Tow Package",
    ];

    await Promise.all(
      options.map(async (m) => {
        await queryInterface.bulkInsert("options", [
          {
            name: m,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );

    const specs = [
      "200mm front axle",
      "Roof mounted antenna",
      "Cargo compartment cover",
      "Rear bench seat -inc: (3) adjustable headrests",
      "Driver & front passenger second generation airbags w/seatbelt sensors",
      "Front seat belt pretensioners w/load limiters",
      "Rear-seat adjustable head restraints",
      "4-wheel drive",
      "Cloth covered headliner",
      "Front/rear side curtain airbags",
      "160-amp alternator",
      "Compact spare tire",
      "Child seat upper tether anchors",
      "Laminated windshield & front door glass",
      "Front & rear door mounted side curtain airbags",
      "Impact-absorbing steering column",
      "Steel beam side-impact door beams",
      "1.8L DOHC 16-valve I4 engine -inc: engine cover",
      "AM/FM stereo w/CD/MP3 player -inc: aux input",
      "Rear seat heat ducts",
      "Dual visor vanity mirrors",
      "Front wheel drive",
      "First aid kit",
      "Advanced dual-stage front airbags -inc: occupant classification system",
      "Remote fuel-filler door release",
      "5-speed automatic transmission w/OD",
      "Front bucket seats -inc: 8-way pwr driver seat, 4-way pwr passenger seat, pwr driver lumbar",
      "Front seat belt height adjusters",
      "Overhead map lights",
      "Tinted glass",
      "Remote trunk release",
      "Impact-absorbing front/rear crumple zones",
      "Rear child safety door locks",
    ];
    await Promise.all(
      specs.map(async (m) => {
        await queryInterface.bulkInsert("specs", [
          {
            name: m,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );

    await queryInterface.bulkInsert("cars", [
      {
        model: "LaCrosse",
        image:
          "https://res.cloudinary.com/raafina/image/upload/v1711818020/78516c3e7625e1920a44ac62ee508dfb.jpg",
        rentPerDay: 100000,
        description:
          "Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.",
        year: 2012,
        capacity: 6,
        transmission_id: 1,
        manufacture_id: 1,
        type_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: "Lincoln",
        image:
          "https://res.cloudinary.com/raafina/image/upload/v1711817915/906e21e03a6ece82d08cbf78abb91332.jpg",
        rentPerDay: 900000,
        description:
          "Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.",
        year: 2021,
        capacity: 6,
        transmission_id: 1,
        manufacture_id: 2,
        type_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        model: "M5",
        image:
          "https://res.cloudinary.com/raafina/image/upload/v1711817915/906e21e03a6ece82d08cbf78abb91332.jpg",
        rentPerDay: 900000,
        description:
          "Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.",
        year: 2018,
        capacity: 6,
        transmission_id: 1,
        manufacture_id: 2,
        type_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("transactions_options", [
      {
        cars_id: 1,
        options_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("transactions_specs", [
      {
        cars_id: 1,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("manufactures", null, {});
    await queryInterface.bulkDelete("transmissions", null, {});
    await queryInterface.bulkDelete("types", null, {});
    await queryInterface.bulkDelete("options", null, {});
    await queryInterface.bulkDelete("specs", null, {});
    await queryInterface.bulkDelete("cars", null, {});
    await queryInterface.bulkDelete("transactions_options", null, {});
    await queryInterface.bulkDelete("transactions_specs", null, {});
  },
};
