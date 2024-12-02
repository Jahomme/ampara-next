import {
  CreateDiaryReqBodyprops,
  createDiaryService,
} from '../diaries/create-diary';

export async function createDiaryAction(formData: CreateDiaryReqBodyprops) {
  const responseData = await createDiaryService(formData);

  if (!responseData) {
    return {
      strapiErrors: responseData.error,
    };
  }

  if (responseData.error) {
    return {
      strapiErrors: responseData.error,
    };
  }

  return { redirectTo: '/user_panel/diaries', ...responseData };
  //   redirect('/user_panel');
}
