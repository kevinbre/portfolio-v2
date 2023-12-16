import * as TooltipRadix from '@radix-ui/react-tooltip';

interface Props {
    children: React.ReactNode;
    trigger: React.ReactNode;
}


export function Tooltip ({children, trigger}: Props) {
  return (
    <TooltipRadix.Provider delayDuration={100}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
            {trigger}
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-neutral-900 px-[15px] py-[10px] text-[15px] leading-none shadow- will-change-[transform,opacity]"
            sideOffset={5}
          >
            {children}
            <TooltipRadix.Arrow className="fill-neutral-900" />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}

