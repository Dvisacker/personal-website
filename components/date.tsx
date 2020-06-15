import { parseISO, format } from "date-fns";
import { Text } from "evergreen-ui";

const Date = ({ dateString }: { dateString: string }): JSX.Element => {
    const date = parseISO(dateString);
    return (
        <Text>
            <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
        </Text>
    );
};

export default Date;
