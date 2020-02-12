import { getMonth } from '../helpers/getMonth';

export const registrationMail = (token, domain) => {
  const currentDate = new Date().getDate();
  const currentMonth = getMonth(new Date().getMonth());
  const currentYear = new Date().getFullYear();

  return {
    subject: 'Success registration',
    /* eslint-disable max-len */
    html: `<table style="border-collapse: collapse; background: #f9f9fb; position: absolute; width: 100%; right: 50%; transform: translateX(50%); border-bottom: 50px solid #f9f9fb;">
        <thead>
        <tr>
            <td colspan="3" style="font-family: Open Sans; font-weight: 600; font-size: 24px; line-height: 33px; text-align: center; padding: 50px 0;">
                Hello! You have successfully registered to Sport News <br /> ${currentMonth} ${currentDate}, ${currentYear}
            </td>
        </tr>
        <tr>
            <td colspan="3" style="font-family: Open Sans; font-weight: 600; font-size: 24px; line-height: 33px; text-align: center; padding: 20px 0;">
                Please click <a href="${domain}/user/${token}">here</a> to confirm your registration
            </td>
        </tr>
        
        </thead>
        <tbody style="background: #fff; text-align: center;">
        <tr>
            <td style="background: #f9f9fb; width: calc(100% / 3)"></td>
            <td style="padding: 40px 0 15px; max-width: 400px">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L8 14.5L20 1" stroke="#D72130" stroke-width="2" stroke-linejoin="round"/>
                </svg>
            </td>
            <td style="background: #f9f9fb; width: calc(100% / 3)"></td>
        </tr>
        <tr>
            <td style="background: #f9f9fb; width: calc(100% / 3)"></td>
            <td style="font-family: Open Sans; font-weight: 600; font-size: 22px; line-height: 28px; color: #D72130; padding: 0 0 15px; max-width: 400px">
                Sport News
            </td>
            <td style="background: #f9f9fb; width: calc(100% / 3)"></td>
        </tr>
        <tr>
            <td style="background: #f9f9fb; width: calc(100% / 3)"></td>
            <td style="font-family: Open Sans; font-weight: 600; font-size: 12px; line-height: 16px; color: #596377; padding: 0 0 40px; max-width: 400px">
                Now you will receive the latest news in the world of sport
            </td>
            <td style="background: #f9f9fb; width: calc(100% / 3)"></td>
        </tr>
        </tbody>
    </table>`,
    /* eslint-disable max-len */
  };
};
