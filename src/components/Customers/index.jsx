import Customer from '../Customer/index'
const { faker } = require('@faker-js/faker');


const Customers = () => {
  const customersList = Array.from({ length: 100 }, () => ({
    avatar: faker.image.avatar(),
    phone: faker.phone.phoneNumber(),
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
 }))
  
  
  
   


  console.log(customersList)

return (
  <div className="customers">
    <h2>Customers</h2>

    {/* la map avec un ( */}
    {customersList.map((customer,index) => (
      <Customer
        firstName={customer.firstName}
        lastName={customer.lastName}
        key={index}
        phone={customer.phone}
        avatar={customer.avatar}
      />


    ))}
 
  </div>
  )
}


export default Customers