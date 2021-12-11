import React, { Component, createContext } from 'react';

export const authContext = createContext(
	{
		userName: 'username',
		email: 'email',
		profilePicture: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhEOBxIPDhAQEhYQGBIVFQ8PFRcXFhUWFhgSGBUYHSggGBolGxcTITEhJikrLi4uFx8zOD8sNygtLisBCgoKDQ0ODw0PDysZFRktLSsrKysrKysrKysrKy0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAD0QAQABAgMEBgcGAwkAAAAAAAABAgMEBREhMUFxEhNRYZHBFEJSgaGx0QYjMnLh8DM0whUiJDVDU2KCov/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD7YAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADViMTRhqNb1UU/OeUOTNMyjB09GjSa54dnfKuXbtV6vpXZmqZ4yomb+fRusUa99U6fCHLVnV6d3RjlH1RoIkac6vRvmmf8ArDps59MfxqInvpnT4ShQFtwmOt4r+FVt9mdk+DpUqJ6M607JjincqzXrJi3ip28Ku3unvDUwAigAAAAAAAAAAAAAAAAADRjsTGEw011cojtng3q/9oMR08TFuN1Eazzn9NPEEXcuTdrmqvbM7dXkFQAAAAABZ8mxnpWH0r/HRsnvjhLvVTK8R6PjaZ4T/dnlP7ifctaLAAAAAAAAAAAAAAAAAAGeamYi512Iqqn1qplbMZX1eErmOFM/JT1iUAAAAAAAAXDBXOuwlFXbTHjulT1myKrpZfEezVMefmUiQARQAAAAAAAAAAAAAAAHJm06Zdc5fOYVRas4jXLbnKPnCqqgAAAAAAAAsP2cn/CVx/z8oV5P/Zz+Wr/N5QCXARQAAAAAAAAAAAAAAAGnHUdZgrlPbTPyU9dlRx+H9GxdVHDXWOU7v33LErnAAAAAAAAWXIKOjl+vtVTPl5K5RTNdcU075nRcMNa6jD00R6sRARsARQAAAAAAAAAAAAAAABw5rgPTLWtH46d3f3O4BS66Jt1zFcTExweVuxeCt4uPvo29sbJ8UVfyGqJ+4qie6rZPjCohh3V5Tfp9TXlNP1a5y+9H+nX4ag5R0/2fe/26/Bspyu/V6kxzmmPMHEJazkVyqfvaqaY7tap+iUweWW8LOtMdKr2p2+EcAceTZdNqetvxpV6sdnfPemARQAAAAAAAAAAAAAAAAAAAAZeK7lNunW5MUx2zMQD0y4rma2be+vXlEz8dzROeWo3RXPuj6gkxF057a4xX4R9W63m9mvfVNPOJ8gdw8Wr1F6PuqqauUxLYDAAAAAAAAAAAAAAAAAAAADRi8ZRhKdb06T2b5n3ODMs3izM0YXSat01b4j6yga65uVzVXMzM8ZUSeKzuu5ssRFuO3fP6I25cquVa3Jmqe2ZmXgEAAAAZiZpnWmZie7Y78Lm92xsrnrI7J3+KPAWvBZlbxeymejV7M+Xa7FIjZKYy7OJo0oxe2OFXGOfaCeCmYqjWnbE8RFAAAAAAAAAAAAAAELnGZ6TNrDT3VVf0w6c5x3o1no2/x1fCO1WlQAAAAAAAAAAABJZTmU4WroXdtuf/AD38lkidY1jbEqSm8ix2k9Tdn8s/0gmxlhFAAAAAAAAAAHm7ci1bmqvZERq9Ij7Q4jo2qbdPrbZ5Ru+PyBC4q/OJvzXXx+EcIagVAAAAAAAAAAAABmmZpq1p2TG1gBbsvxXpeFirjunm6FdyDEdVipoq3Vx8Y/TVYkUAAAAAAAAABlU81vddj65jdE9GPd+5Wm5X1duauyJnwUyZ1nWVhWABAAAAAAAAAAAAAAHq1XNq5FVO+mYnwXOiqK6Iqp3TETHvUpasnudZl1GvCJp8J0+WhSOwBFAAAAAAAAacd/JXPyVfKVPBYUAEAAAAAAAAAAAAAAFlyH/L4/NPkyBEgAigAAAP/9k='
  	}
)

class authContextProvider extends Component {
//   state = {
//     userName: 'username',
//     email: 'email',
//     profilePicture: 'data:image/jpeg;base64,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'
//   }


	render() {
		return (
			<authContext.Provider value={{...this.state}}>
				{this.props.children}
			</authContext.Provider>
		);
	}
}

export default authContextProvider;