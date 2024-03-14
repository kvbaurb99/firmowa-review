export const formatPhoneNumber = (input: string) => {

    let cleaned = ('' + input).replace(/\D/g, '');
    
    let match = cleaned.match(/(\d{1,3})(\d{1,3})?(\d{1,3})?/);
    
    let formattedNumber = '';
  
    if (match) {
      formattedNumber += match[1];
      if (match[2]) {
        formattedNumber += ' ' + match[2];
      }
      if (match[3]) {
        formattedNumber += ' ' + match[3];
      }
    }
  
    return formattedNumber;
  };