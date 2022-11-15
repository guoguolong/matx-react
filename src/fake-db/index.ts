import mock from './mock';

import './db/auth';
import './db/ecommerce';
import './db/notification';

mock.onAny().passThrough();
