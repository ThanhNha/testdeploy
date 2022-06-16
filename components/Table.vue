<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Combo BLE</th>
        <th>Combo WIFI</th>
        <th>Combo remote</th>
      </tr>
    </thead>
    <tbody class="caption-table">
      <tr>
        <td>Công nghệ</td>
        <td>BLE</td>
        <td>WIFI</td>
        <td>BLE</td>
      </tr>
      <tr>
        <td>App</td>
        <td>Ralli Bluetooth</td>
        <td>Ralli Bluetooth</td>
        <td>Ralli Bluetooth</td>
      </tr>
      <tr>
        <td>Số lượng thiết bị</td>
        <td>1</td>
        <td>1</td>
        <td>Không giới hạn</td>
      </tr>
      <tr>
        <td>Nâng cấp smarthome</td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Kịch bản gợi ý</td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Tự thiết lập kịch bản</td>
        <td></td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>16 triệu màu ánh sáng</td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>WIFI</td>
        <td>Trường hợp ngắt kết nối, các thiết bị vẫn hoạt động ổn định.</td>
        <td>Trường hợp ngắt kết nối Internet, các thiết bị không thể hoạt động.</td>
        <td>Trường hợp ngắt kết nối, các thiết bị vẫn hoạt động ổn định.</td>
      </tr>
      <tr>
        <td>Điều khiển smartphone</td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Điều khiển công tắc cảm ứng</td>
        <td></td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>Bảng điều khiển cảnh</td>
        <td></td>
        <td></td>
        <td>
          <div class="flex items-center justify-center">
            <div
              class="w-[20px] h-[20px] bg-linear-2 flex items-center justify-center rounded-full"
            >
              <JIcon name="check2" />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="py-[17px]">
          <JButton
            title="Xem chi tiết"
            className="w-full"
            class="md:block hidden"
            @click.native="clickMenu('combo-ble')"
          />
          <JButton
            title="Xem chi tiết"
            variant="text"
            className="w-full"
            size="text"
            class="block md:hidden"
            @click.native="clickMenu('combo-ble')"
          />
        </td>
        <td class="py-[17px]">
          <JButton
            title="Xem chi tiết"
            className="w-full"
            class="md:block hidden"
            @click.native="clickMenu('combo-wifi')"
          />
          <JButton
            title="Xem chi tiết"
            variant="text"
            className="w-full"
            size="text"
            class="block md:hidden"
            @click.native="clickMenu('combo-wifi')"
          />
        </td>
        <td class="py-[17px]">
          <JButton
            title="Xem chi tiết"
            className="w-full"
            class="md:block hidden"
            @click.native="clickMenu('combo-remote')"
          />
          <JButton
            title="Xem chi tiết"
            variant="text"
            className="w-full"
            size="text"
            class="block md:hidden"
            @click.native="clickMenu('combo-remote')"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      current: '',
    }
  },
  methods: {
    clickMenu(id) {
      var offsetTop = document.getElementById(id).offsetTop - 60
      this.scrollTo(offsetTop, 2000, this.easeOutCubic, function () {})
      this.current = document.getElementById(id)
    },

    easeOutCubic: function (t) {
      return --t * t * t + 1
    },
    scrollTo(Y, duration, easingFunction, callback) {
      var start = Date.now(),
        elem = document.documentElement ? document.documentElement : document.body,
        from = elem.scrollTop

      if (from === Y) {
        callback()

        return /* Prevent scrolling to the Y point if already there */
      }

      function min(a, b) {
        return a < b ? a : b
      }

      function scroll(timestamp) {
        var currentTime = Date.now(),
          time = min(1, (currentTime - start) / duration),
          easedT = easingFunction(time)

        elem.scrollTop = easedT * (Y - from) + from

        if (time < 1) requestAnimationFrame(scroll)
        else if (callback) callback()
      }

      requestAnimationFrame(scroll)
    },
  },
}
</script>

<style lang="scss" scoped>
table {
  @apply rounded-[20px] overflow-hidden w-full bg-white;
  tbody,
  thead {
  }

  thead {
    tr {
      th {
        &:nth-child(1) {
          @apply w-[16%] md:w-[25%] lg:w-[22%];
        }
        @apply text-center bg-white w-[25%];
      }
    }
  }
  tbody {
    tr {
      td {
        &:nth-child(1) {
          @apply text-left font-semibold text-gray-800;
        }
        @apply border border-gray-200 px-[8px] md:px-[12px] lg:px-[24px] text-center font-medium;
      }
    }
  }
  tr {
    th,
    td {
      &:last-child {
        @apply py-[17px];
      }
      @apply py-[8px];
    }
  }
}

th {
  @apply border-r border-gray-200 last:border-0;
}
</style>
