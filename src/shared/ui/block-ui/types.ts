import type {Option} from "@/shared/ui/select-ui/types";

export type BlockWindowUIEmits = {
    (e: 'close', value: Option): void;
};
