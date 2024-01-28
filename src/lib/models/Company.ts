export default class Company {
  constructor(data) {
    const { id, attributes, relationships } = data;

    this.id = id;
    this.name = attributes['business-name'] || attributes['legal-name'];
    this.address = attributes['address'];
    this.phone = attributes['phone'];
    this.email = attributes['email-orders'] || attributes['email-general'];
    this.website = attributes['website'];

    this.countryId = relationships.country.data.id;
  }

  // Attributes

  id;
  name;
  address;
  phone;
  email;
  website;

  // Relationships

  countryId;

  // TODO: improve so that we do not need to pass in records,
  // instead we can read countries from Svelte store
  country(records) {
    return records.find((record) => record.id === this.countryId);
  }

  get websiteLink() {
    return this.website;
  }

  get websiteLabel() {
    return this.website.replace('https://', '').replace('http://', '').replace(/\/$/, '');
  }
}
