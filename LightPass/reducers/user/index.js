import { combineReducers } from 'redux';
import current from './current';
import list from './list';
import passList from './passList';
import byId from './byId';
import passListIssuedByUser from './passListIssuedByUser';
import webPassListIssuedByUser from './webPassListIssuedByUser';

export default combineReducers({
  webPassListIssuedByUser,
  passListIssuedByUser,
  current,
  list,
  passList,
  byId,
});
