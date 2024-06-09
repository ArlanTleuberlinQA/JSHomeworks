const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };

  
  
  function findValueByKey(companyName) {
    function search(company) {
      if (company.name === companyName) {
        const filteredCompany = {uses: company.uses, sells:company.sells};
        return filteredCompany;
      }
  
      if (company.clients && Array.isArray(company.clients)) {
        for (let client of company.clients) {
          const result = search(client);
          if (result) {
            return result;
          }
        }
      }
  
      else if (company.partners && Array.isArray(company.partners)) {
        for (let partner of company.partners) {
          const result = search(partner);
          if (result) {
            return result;
          }
        }
      }
      
      return null;
    }
  
    return search(company);
  }
  
  console.log(findValueByKey('Клієнт 1.2'));
