//A new Suite described called address book 
//and within it we have a spec called "Should be able to add a contact"

describe('Address Book' ,function () {
	it('Should be able to add a contact', function(){
		var addressBook = new AddressBook(),
			thisContact=new Contact();

		addressBook.addContact(thisContact);			//testing the addContact function by getContact feature

		expect(addressBook.getContact(0)).toBe(thisContact);
	});
	it('Should be able to delete a contact', function(){
		var addressBook = new AddressBook(),
			thisContact=new Contact();

		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);
		expect(addressBook.getContact(0)).not.toBeDefined();
	});
} );