//! Formatage de la date.

export const FORMAT_DATE = (dateStr) => {
  const troncated = dateStr.split('.')[0];

  const dates = troncated.split('T');

  const dateOne = dates[0].split('-').reverse().join('/');

  return `Le: ${dateOne}, à ${dates[1]}`;
};

//! -------------------------------------------------
