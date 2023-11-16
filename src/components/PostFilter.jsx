import MyInput from './UA/input/MyInput';
import MySelect from './UA/select/MySelect';

const PostFilter = ({filter, setFilter}) => {

  return (
    <div>
      <hr style={{ margin: '15px 8px' }} />

      <MyInput
        placeholder="find"
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />

      <MySelect
        defaultValue="Order by"
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        options={[
          { value: 'title', name: 'By name' },
          { value: 'content', name: 'By description' },
        ]}
      />
    </div>
  );
};

export default PostFilter;