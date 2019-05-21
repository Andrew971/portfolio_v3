import uuidv4 from 'uuid/v4';

function createProductData(name, category, placeArray, profiles, requirements, schedule, objectif, program, methods, speakers, materials, validation, display,) {

  return {
    Key: uuidv4(),
    Type: 'PRODUCT',
    Name: name,
    Category: category,
    Places: placeArray,
    Profiles: profiles,
    Requirements: requirements,
    Schedule: schedule,
    Objectif: objectif,
    Program: program,
    Methods: methods,
    Speakers: speakers,
    Materials: materials,
    Validation: validation,
    Display: display,
    Created_At: Date.now(),
    Updated_At: Date.now()
  };
}

export const mockProductList = [
  createProductData('traning 1', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 1'}, 'methode', 'speakers', 'material','validation',true),
  createProductData('traning 2', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 2'}, 'methode', 'speakers', 'material','validation',true),
  createProductData('traning 3', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 3'}, 'methode', 'speakers', 'material','validation',true),
  createProductData('traning 4', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 4'}, 'methode', 'speakers', 'material','validation',true),
  createProductData('traning 5', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 5'}, 'methode', 'speakers', 'material','validation',true),
  createProductData('traning 6', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 6'}, 'methode', 'speakers', 'material','validation',true),
  createProductData('traning 7', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 7'}, 'methode', 'speakers', 'material','validation',true),
  createProductData('traning 8', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 8'}, 'methode', 'speakers', 'material','validation',true),
  createProductData('traning 9', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 9'}, 'methode', 'speakers', 'material','validation',true),
  createProductData('traning 10', "a1245e35-c9a2-48a0-8d0b-82457af90627", [], [], [], [], 'objectif 1', {title:'Program 10'}, 'methode', 'speakers', 'material','validation',true),
]

export const mockProduct = {
  id: "1",
  "name": "training 1",
  "category": 'autre',
  "places": [
    {
      "address1": "Section Faugas, Castel",
      "zipCode": "97129",
      "city": "Lamentin",
      "country": "FR",
      "id": "b384d53e-0b5e-4645-a483-f064a43c5a2d"
    }, {
      "address1": "Credit Mutuel",
      "zipCode": "97129",
      "city": "Lamentin",
      "country": "GP",
      "id": "5a4a1fc4-4045-4c12-927a-15e6cf3a352a"
    }
  ],
  "profiles": [
    {
      "value": "profile 1",
      "id": "2fa5800d-4cef-4a4b-89cd-bf3243ba8685"
    }
  ],
  "requirements": [
    {
      "value": "requirements 1",
      "id": "cf627f4a-f0d3-4ea3-babb-ee06fb567178"
    }
  ],
  "schedule": [
    {
      "startDate": "2019-04-20T04:49:02.411Z",
      "endDate": "2019-04-20T04:49:02.411Z",
      "startTime": "2019-04-20T04:49:02.411Z",
      "endTime": "2019-04-20T04:49:02.411Z",
      "numberOfParticipant": "7",
      "id": "7aff8b8d-450b-4b07-b94b-641c8fd5dd9e"
    }, {
      "startDate": "2019-05-01T04:49:00.000Z",
      "endDate": "2019-05-31T04:49:00.000Z",
      "startTime": "2019-04-20T04:49:06.946Z",
      "endTime": "2019-04-20T04:49:06.946Z",
      "numberOfParticipant": "7",
      "id": "02dcf928-0c0f-4b9b-8358-b4cce593d2e2"
    }
  ],
  "objectif": "objectif",
  "program": {
    "title": "program",
    "modules": [
      {
        "value": "module 1",
        "id": "1c63e3e2-a163-4961-8659-668e85f4a37a"
      }, {
        "value": "module 2",
        "id": "c0accc35-002e-43c1-b8b0-efef46cf428a"
      }
    ]
  },
  "methods": "method",
  "speakers": "speaker",
  "materials": "material",
  "validation": "validation",
  "display": true
}



export const mockClient = {
  "id": "6f45c493-d355-42b5-a388-8c259bf5b854",
  "firstName": "Andrew",
  "lastName": "SORDIER",
  "birthName": "SORDIER",
  "birthDay": "04/07/1995",
  "birthPlace": "Abymes",
  "address": {
    "address1": "Section Faugas, Castel",
    "city": "Lamentin",
    "zipCode": "97129",
    "country": "France"
  },
  "phone": "6047159075",
  "landLine": "6047159075",
  "email": "andrew.entreprise@gmail.com",
  "selectedTraining": {
    "id": "1",
    "schedule": {
      "startDate": "2019-04-20T04:49:02.411Z",
      "endDate": "2019-04-20T04:49:02.411Z",
      "startTime": "2019-04-20T04:49:02.411Z",
      "endTime": "2019-04-20T04:49:02.411Z",
      "id": "7aff8b8d-450b-4b07-b94b-641c8fd5dd9e"
    }
  },
  "documents": [
    {
      "preview": "https://s3.ca-central-1.amazonaws.com/pronet-bucket/Behind-the-screen.jpg"
    }, {
      "preview": "https://s3.ca-central-1.amazonaws.com/pronet-bucket/Behind-the-screen.jpg"
    }
  ]
}

export const mockCategory1 = {
  "Name": "Autre",
  "Key": "a1245e35-c9a2-48a0-8d0b-82457af90627",
  "Category": "product"
}
export const mockCategory2 = {
  "Name": "Client",
  "Key": "05d2c120-6ed3-4666-9786-e5e3b054ea7b",
  "Category": "product"
}

export const mockCategoryList = [mockCategory1, mockCategory2];

function createClientData(firstName, lastName, birthName, birthDay, birthPlace, location, phone, landLine, email, selectedTraining, documents) {

  return {
    Type: 'CUSTOMER',
    Key: uuidv4(),
    Name: `${lastName} ${firstName}`,
    FirstName: firstName,
    LastName: lastName,
    BirthName: birthName,
    BirthDay: birthDay,
    BirthPlace: birthPlace,
    Address: location,
    Phone: phone,
    LandLine: landLine,
    Email: email,
    SelectedTraining: selectedTraining,
    Documents: documents
  };
}
export const mockClientList = [
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "xxx@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "sordier.r@xxx.com", {id:'1'}, []),
  createClientData('Cupcake', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "palama@xxx.com", {id:'1'}, []),
  createClientData('Andrew', 'eclaire', 'cake', '04/07/95', 'Abymes', {
    formattedAddress: "Faugas Castel, 97129 Lamentin, Guadeloupe-France"
  }, '000000', "59000055", "sordier@xxx.com", {id:'1'}, [])
]