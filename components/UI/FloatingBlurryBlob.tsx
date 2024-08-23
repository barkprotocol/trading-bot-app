import classnames from 'classnames'

import { FloatingBlurryBlobColors } from '@/types/index'

type Props = {
  color?: FloatingBlurryBlobColors
  left?: number
  top?: number
  right?: number
  bottom?: number
  height: number
  width: number
  rotation: number
}

const { GREY, WHITE, BLACK, BEIGE } = FloatingBlurryBlobColors

const FloatingBlurryBlob = ({
  color = GREY,
  left,
  top,
  right,
  bottom,
  height,
  width,
  rotation,
}: Props) => {
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
        left,
        top,
        right,
        bottom,
        rotate: `${rotation}deg`,
      }}
      className={classnames([
        {
          'bg-gray-500': color === GREY,
          'bg-white': color === WHITE,
          'bg-black': color === BLACK,
          'bg-[#D0BFB4]': color === BEIGE,
          'absolute blur-[100px]': true,
        },
      ])}
    />
  )
}

export default FloatingBlurryBlob
