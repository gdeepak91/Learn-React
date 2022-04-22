import PhotoUtils from './PhotoUtils';

describe('PhotoUtils',()=>{
  test('PhotoUtils retrun an array of photo ids',()=>{
    const fakePhotos = {
      photo01 : {},
      photo02 : {},
      photo03 : {}
    };
    const expectedListOfPhotoIds = [
      'photo01',
      'photo02',
      'photo03'
    ];
    const actualListOfPhotoIds = PhotoUtils.PhotoUtilsIds(
      fakePhotos
    );

    expect(actualListOfPhotoIds).toEqual(expectedListOfPhotoIds);
  });
});