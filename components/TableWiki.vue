<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th class="text-linear-1 h4">RalliSmart V2</th>
        <th class="text-linear-1 h4">Ralli Bluetooth</th>
      </tr>
    </thead>
    <tbody class="text-black">
      <tr>
        <td class="p2">HC</td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="p2">Số lượng hoạt cảnh</td>
        <td>200</td>
        <td>48</td>
      </tr>
      <tr>
        <td class="p2">Kết nối đèn</td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-red" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="p2">Điều khiển đèn thông minh</td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="p2">Điều thiết bị chiếu sáng</td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="p2">Điều khiển thiết bị điện</td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-red" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="p2">Điều khiển bằng giọng nói</td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="p2">Sử dụng cho smarthome</td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-done" />
          </div>
        </td>
        <td>
          <div class="flex item-center justify-center">
            <JIcon name="check-red" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="p2">Phạm vi điều khiển</td>
        <td>Toàn bộ ngôi nhà</td>
        <td>Phòng</td>
      </tr>
      <tr>
        <td class="p2">Cấu hình Combo</td>
        <td>Combo giải pháp sức khỏe, combo an ninh, smarthome</td>
        <td>Combo BLE, Combo WIFI, Combo Remote</td>
      </tr>
      <tr>
        <td class="p2">Tải miễn phí</td>
        <td>iOS, Android</td>
        <td>iOs, Android</td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="scss" scoped>
table {
  @apply rounded-[20px] overflow-hidden w-full bg-white;
  tbody,
  thead {
    @apply w-[25%];
  }
  thead {
    tr {
      @apply border-b border-gray-200;
      th {
        @apply text-center bg-white;
        &:nth-child(1) {
          width: 40%;
        }
        &:nth-child(2),
        &:nth-child(3) {
          width: 30%;
        }
      }
    }
  }
  tbody {
    tr {
      @apply border-b border-gray-200;
      &:last-child {
        @apply border-b border-transparent;
      }
      td {
        &:nth-child(1) {
          @apply text-left font-semibold text-black;
        }
        @apply lg:px-[16px] px-[12px] text-center font-normal;
      }
    }
  }
  th,
  td {
    @apply xl:py-4 md:py-3 py-2;
  }
}
</style>
