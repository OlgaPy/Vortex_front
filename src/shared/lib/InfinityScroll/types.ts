export interface IInfinityScrollProps {
	getData: <T> () => Promise<T[]>;
	updateData: <T> (newData: T[]) => void;
}
