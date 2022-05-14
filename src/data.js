const priceData = [
  {
    type: "Basic",
    price: {
      monthly: 19.99,
      annually: 199.99
    },
    storage: {
      capacity: 500,
      units: 'GB'
    },
    users: 2,
    sendCapacity: 3,
    promoted: false,
  },
  {
    type: "Professional",
    price: {
      monthly: 24.99,
      annually: 249.99
    },
    storage: {
      capacity: 1,
      units: 'TB'
    },
    users: 5,
    sendCapacity: 10,
    promoted: true,
  },
  {
    type: "Master",
    price: {
      monthly: 39.99,
      annually: 399.99
    },
    storage: {
      capacity: 2,
      units: 'TB'
    },
    users: 10,
    sendCapacity: 20,
    promoted: false,
  },
]

export default priceData