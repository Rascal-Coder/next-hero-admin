import { Spinner } from '@heroui/spinner';

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-60">
      <Spinner label="Loading..." color="primary" />
    </div>
  );
}