import React, { useEffect, useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import useDebounce from '../../hooks/useDebounce'
import { getDadataStreets } from '../../services/daData';

const City = ({ defaultValue, city, setCity, className }) => {
    const [streetsDadata, setStreetsDadata] = useState([])
    const streetText = useDebounce(city, 1000)
    useEffect(() => {
        if (streetText) {
            getDadataStreets({
                query: streetText,
                locations: [{ city_type_full: 'город' }],
                restrict_value: false,
                from_bound: { value: 'city' },
                to_bound: { value: 'city' },
            }).then((res) => {
                if (res?.data?.suggestions) {
                    setStreetsDadata(res.data.suggestions)
                }
            })
        }
    }, [streetText])
    return (
        <AsyncTypeahead
            id="city"
            className={className}
            defaultInputValue={defaultValue ?? ''}
            labelKey={(option) => option?.value}
            minLength={1}
            dropup
            emptyLabel={'Ничего не найдено'}
            onSearch={(e) => setCity(e)}
            onChange={(e) => {
                if (e[0]?.data?.country && e[0]?.data?.city) {
                    setCity(e[0].data.city)
                }
            }
            }
            options={streetsDadata}
            searchText={'Поиск...'}
            promptText={'Введите город'}
            placeholder={'Введите город'}
            renderMenuItemChildren={(option) => option?.value}
            inputProps={{ className: 'input' }}
        />
    )
}
export default City