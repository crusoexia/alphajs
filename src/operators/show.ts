import { AlgebraicData } from '../data';

const show = <a>(data: AlgebraicData<a>) => {
  if (Array.isArray(data)) {
    return data.toString();
  }
  return data.show();
};

export default show;
