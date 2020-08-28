export const PLOT_PARAMS = {
    grid: {
        clickable: true,
        hoverable: true,
    },
    series: {
        lines: {
            show: true,
        },
        points: {
            show: true,
        },
    },
};

export function fc_solve__chart__add_tooltip(): void {
    $("<div id='tooltip'></div>")
        .css({
            "background-color": "#fee",
            border: "1px solid #fdd",
            display: "none",
            opacity: 0.8,
            padding: "2px",
            position: "absolute",
        })
        .appendTo("body");

    return;
}
export function fc_solve__chart_bind(chart_selector: string, plot: any): void {
    $(chart_selector).bind("plothover", (event, pos, item) => {
        {
            const str = `(${pos.x.toFixed(2)},${pos.y.toFixed(2)})`;
            $("#hoverdata").text(str);
        }

        {
            if (item) {
                const x = item.datapoint[0] / 1000000;
                const y = item.datapoint[1].toFixed(2);

                $("#tooltip")
                    .html(`${item.series.label} of ${x.toFixed(1)} M = ${y}sec`)
                    .css({ top: item.pageY + 5, left: item.pageX + 5 })
                    .fadeIn(200);
            } else {
                $("#tooltip").hide();
            }
        }
        return false;
    });

    $(chart_selector).bind("plotclick", (event, pos, item) => {
        if (item) {
            $("#clickdata").text(
                ` - click point ${item.dataIndex} in ${item.series.label}`,
            );
            plot.highlight(item.series, item.datapoint);
        }
    });
}
export function fc_solve__get_fields(chart_selector: string): number[][] {
    const lines = $(chart_selector).text().split("\n");
    lines.shift();
    return lines.map((l) => l.split("\t").map(parseFloat));
}
