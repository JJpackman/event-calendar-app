import generateEventId from "./generateEventId";
import _ from 'lodash';

describe('Event id generator', () => {
  it('should throw TypeError if parameter is not a Date object', () => {
    expect(() => generateEventId({ toDateString() { console.log('...') } })).toThrowError(TypeError);
    expect(() => generateEventId(13)).toThrowError(TypeError);
    expect(() => generateEventId("05.02.2017")).toThrowError(TypeError);
  });

  it('should return unique id as string', () => {
    expect(typeof generateEventId(new Date())).toStrictEqual('string');
  });

  it('should return new unique id', () => {
    const ids = Array.from({length: 50}, () => generateEventId(new Date()));

    const noDuplicateIds = _.uniq(ids);

    expect(ids.length).toEqual(noDuplicateIds.length);
  });
});
