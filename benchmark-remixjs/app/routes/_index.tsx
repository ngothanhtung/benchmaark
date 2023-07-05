import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [{ title: '' }, { name: 'description', content: '' }];
};

export default function Index() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
