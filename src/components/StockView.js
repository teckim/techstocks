import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCompanyAsync, selectCompany } from '../store/stocksSlice';

const companyStructure = [
  { key: 'companyName', title: 'Company Name' },
  { key: 'currency', title: 'Currency' },
  { key: 'exchange', title: 'Exchange' },
  { key: 'industry', title: 'Industry' },
  { key: 'website', title: 'Website' },
  { key: 'ceo', title: 'CEO' },
  { key: 'address', title: 'Address' },
  { key: 'city', title: 'City' },
  { key: 'state', title: 'State' },
  { key: 'zip', title: 'Zip' },
];

const StockView = () => {
  const { companyId } = useParams();
  const company = useSelector(selectCompany);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanyAsync(companyId));
  }, [dispatch]);

  return (
    <div>
      <div className="h-52 flex items-center px-4 py-4">
        <div className="basis-1/2">
          <div className="text-center">
            <img className="h-36 drop-shadow-2xl" src={company.image} alt={company.companyName} />
          </div>
        </div>
        <div className="basis-1/2">
          <div className="text-right">
            <div className="text-xl uppercase break-normal font-bold tracking-wider">{company.companyName}</div>
            <div className="tracking-wider">
              {`$ ${company.price}`}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-pink-600 text-sm tracking-wide px-4 py-1">COMPANY INFORMATION IN THIS MINUT</div>
        {
          company && companyStructure.map(({ key, title }) => (
            <div key={key} className="h-20 flex items-center justify-between px-4 text-lg even:bg-pink-600/25 odd:bg-pink-600/75">
              <div>{title}</div>
              <div>{company[key]}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default StockView;
