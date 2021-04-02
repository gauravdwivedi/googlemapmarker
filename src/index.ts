// import { User } from './User';
// import { Company } from './Company';

// const company = new Company();
// google;

// console.log(user, company);
import { CustomMap } from './CustomMap';
import { Company } from './Company';

import { User } from './User';

const user = new User();
const customMap = new CustomMap('map');

const company = new Company();

// customMap.addCompanyMarker(company);

customMap.addUserMarker(company);
customMap.addUserMarker(user);
