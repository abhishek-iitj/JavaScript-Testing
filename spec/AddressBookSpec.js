//A new Suite described called address book 
//and within it we have a spec called "Should be able to add a contact"
describe('Address Book' ,function () {
	var addressBook,
		thisContact;

	beforeEach(function(){
		addressBook = new AddressBook(),
		thisContact=new Contact();	
	});

	it('Should be able to add a contact', function(){

		addressBook.addContact(thisContact);			//testing the addContact function by getContact feature
		expect(addressBook.getContact(0)).toBe(thisContact);
	});

	it('Should be able to delete a contact', function(){
		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);
		expect(addressBook.getContact(0)).not.toBeDefined();
	});
});

describe('Async Address Book', function(){
	var addressBook= new AddressBook();
	
	beforeEach(function(done) {
		addressBook.getInitialContacts(function(){
			done();
		});
	});

	it('Should grab initial contacts', function(done){
		expect(addressBook.initialComplete).toBe(true);
		done();
	});
});