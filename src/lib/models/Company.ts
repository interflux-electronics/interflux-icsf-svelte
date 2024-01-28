export default class Company {
  constructor(data) {
    const { id, attributes, relationships } = data;

    this.id = id;
    this.name = attributes['business-name'] || attributes['legal-name'];
    this.address = attributes['address'];
    this.phone = attributes['phone'];
    this.email = attributes['email-general'] || attributes['email-orders'];
    this.website = attributes['website'];

    // this.countryId = relationships.find((rel) => rel.type === 'country').id;
  }

  name;
  address;
  phone;
  email;
  website;

  countryId = 'AU';

  // TODO: improve so that we do not need to pass in records,
  // instead we can read countries from Svelte store
  country(records) {
    return records.find((record) => record.id === this.countryId);
  }
}
