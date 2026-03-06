import TransparentBusiness from '@/components/TransparentBusiness';

export default function HomePage() {
  return (
    <div style={{ padding: '200px', background: 'red', color: 'white', zIndex: 9999, position: 'relative' }}>
      <h1>TESTING IF REACT RENDERS</h1>
      <TransparentBusiness />
    </div>
  );
}
