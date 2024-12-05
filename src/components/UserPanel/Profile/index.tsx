'use client';

import Link from 'next/link';
import * as C from './styled';
import { ArrowIcon } from '../../svg/ArrowIcon';
import React, { MouseEventHandler, ReactEventHandler, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { UserContext } from '@/context/UserContext';
import { createDiaryService } from '@/data/diaries/create-diary';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { EmployeeData } from '@/@types/employees/employee';
import { FaTimes } from 'react-icons/fa';

export const ProfileContainer = ({
  employees,
}: {
  employees: EmployeeData[];
}) => {
  const userContext = useContextSelector(UserContext, (ctx) => ctx);
  const [emotions, setEmotions] = useState<String[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [acceptedEmployees, setAcceptedEmployees] = useState<string[]>([]);
  const [formatedEmployees, setFormatedEmployees] = useState(
    employees.map((item) => {
      return item.attributes.name;
    }),
  );
  const router = useRouter();

  const data = [
    { key: 'Nome', value: userContext.username },
    { key: 'Email', value: userContext.email },
    { key: 'Telefone', value: userContext.phone },
  ];

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (!acceptedEmployees.includes(selectedValue)) {
      setAcceptedEmployees((prev) => [...prev, selectedValue]);
      setFormatedEmployees((prev) =>
        prev.filter((item) => item !== selectedValue),
      );
    }
  };

  const handleRemoveSelect = (selectedValue: string) => {
    if (acceptedEmployees.includes(selectedValue)) {
      // Adiciona o item de volta em formatedEmployees
      setFormatedEmployees((prev) => [...prev, selectedValue]);

      // Remove o item de acceptedEmployees
      setAcceptedEmployees((prev) =>
        prev.filter((item) => item !== selectedValue),
      );
    }
  };

  return !isEdit ? (
    <C.MainContainer>
      <C.Header>
        <h1>Minha Conta</h1>
      </C.Header>
      <C.TableContainer>
        <C.UserDataContainer>
          {data.map((item) => {
            return (
              <C.UserData>
                <span className="key">{item.key}:</span>
                <span className="value">{item.value}</span>
              </C.UserData>
            );
          })}
        </C.UserDataContainer>
        <C.ManageEmployees>
          <C.UserData>
            <span className="key">Escolha quem pode olhar seus Diários:</span>
            <select onChange={handleChangeSelect}>
              <option value="">Selecione um profissional</option>
              {formatedEmployees.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </C.UserData>
          {acceptedEmployees.map((item) => {
            return (
              <C.AcceptedEmployees>
                <span>{item}</span>
                <button onClick={() => handleRemoveSelect(item)}>
                  <FaTimes color="black" size={16} />
                </button>
              </C.AcceptedEmployees>
            );
          })}
        </C.ManageEmployees>
      </C.TableContainer>
    </C.MainContainer>
  ) : (
    <C.MainContainer>
      <C.Header>
        <h1>Minha Conta</h1>
      </C.Header>
      <C.TableContainer>
        <C.UserDataContainer>
          {data.map((item) => {
            return (
              <C.UserData>
                <span className="key">{item.key}:</span>
                <span className="value">{item.value}</span>
              </C.UserData>
            );
          })}
        </C.UserDataContainer>
        <C.UserData>
          <span className="key">Escolha quem pode olhar seus Diários:</span>
          <select onChange={handleChangeSelect}>
            {formatedEmployees.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </C.UserData>
        {acceptedEmployees.map((item) => {
          return (
            <div>
              <span>{item}</span>
              <FaTimes color="black" size={24} />
            </div>
          );
        })}
      </C.TableContainer>
    </C.MainContainer>
  );
};
